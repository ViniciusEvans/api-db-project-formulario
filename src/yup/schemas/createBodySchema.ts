import * as Yup from "yup";

export const createBodySchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório!"),
  sobrenome: Yup.string().required("Sobrenome é obrigatório!"),
  email: Yup.string().email().required("Email é obrigatório!"),
  telefone: Yup.string().length(11, "Telefone deve conter DDD + número!"),
  cidade: Yup.string().required("Cidade é obrigatório!"),
  estado: Yup.string().required("Estado é obrigatório!"),
  cep: Yup.string()
    .length(8, "Cep deve ter 8 números!")
    .required("CEP é obrigatório!"),
  estado_civil: Yup.string().required("Estado cívil é obrigatório!"),
  genero: Yup.string().required("Gênero é obrigatório!"),
  etnia: Yup.string().required("Etnia é obrigatório!"),
  peso: Yup.number().required("Peso é obrigatório!"),
  altura: Yup.number().required("Altura é obrigatório!"),
});
