import { pool } from "../db.js";

export const getArticulos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM articulo");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const getArticulo = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM articulo WHERE codigo=?", [
      req.params.codigo,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Articulo no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const createArticulo = async (req, res) => {
  const { nombre, categoria } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO articulo (nombre,categoria) VALUES (?,?)",
      [nombre, categoria]
    );
    res.send({
      id: rows.insertId,
      nombre,
      categoria,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
export const deleteArticulo = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM articulo WHERE codigo=?", [
      req.params.codigo,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Articulo no encontrado",
      });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};

export const updateArticulo = async (req, res) => {
  const { codigo } = req.params;
  const { nombre, categoria } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE articulo SET nombre=IFNULL(?,nombre),categoria=IFNULL(?,categoria) WHERE codigo=?",
      [nombre, categoria, codigo]
    );

    console.log(result);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Articulo no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM articulo WHERE codigo=?", [
      codigo,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo salio mal",
    });
  }
};
