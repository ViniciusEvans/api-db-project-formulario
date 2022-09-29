import * as Yup from "yup";

export const uuidSchema = Yup.object().shape({
  id: Yup.string().uuid("id deve ser do tipo uuid!"),
});
