const validate = (schema) => async (req, res, next) => {
  try {
    const parsBody = await schema.parseAsync(req.body);

    req.body = parsBody;
    next();
  } catch (err) {
    const status = 442;
    const message = "Fill the input properly.";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    console.error(error);
    // res.status(400).json({ msg:message });
    next(error);
  }
};

module.exports = validate;
