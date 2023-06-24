//const users = require("../utils/users");
// const login = (req, res) => {
//   const { email, password } = req.query;

//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) {
//     res.status(200).json({ access: true });
//   } else {
//     res.status(200).json({ access: false });
//   }
// };

// module.exports = login;

const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.password === password) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(403).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = login;
