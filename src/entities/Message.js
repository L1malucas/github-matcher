import { EntitySchema } from "typeorm";

const Message = new EntitySchema({
  name: "Message",
  tableName: "messages",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    content: {
        type: "text"
    },
    viewed: {
        type: "boolean"
    }
  },
});

