const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// Login de usuario
const login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const user = await User.findOne({ where: { correo } });
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Compara password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // token
    const token = jwt.sign(
      { sub: user.id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error en el login",
      error: error.message,
    });
  }
};

// Obtener usuario autenticado

const me = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.sub, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error("Error en /me:", err.message);
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = { login, me };

