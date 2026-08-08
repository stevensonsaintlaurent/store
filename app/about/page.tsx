import db from "@/utils/db";

async function AboutPage() {
  const profile = db.user.create({
    data: {
      name: "random name",
      email: "sdfdfs@",
    },
  });

  const users = await db.user.findMany();

  return (
    <div>
      {users.map((user) => {
        return (
          <h2 key={user.id} className="text-2xl font-bold">
            {user.name}
          </h2>
        );
      })}
    </div>
  );
}
export default AboutPage;
