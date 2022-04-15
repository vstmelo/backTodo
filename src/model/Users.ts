import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "back_react" })
export class Users {
  @Column("varchar", { name: "username", length: 16 })
  username: string;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "password", length: 32 })
  password: string;

  @Column("timestamp", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
