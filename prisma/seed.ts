import prisma from '../src/db';

const main = async () => {
  console.log('🌱 Seeding database...');

  const alice = await prisma.user.create({
    data: {
      username: 'maciej_dev',
      email: 'maciej@dev.com',
      profile: {
        create: {
          bio: 'Backend developer focused on Erlang and Node.js comparison projects.',
          website: 'http://myproject.com',
        },
      },
    },
    include: {
      profile: true,
    },
  });

  const tagTech = await prisma.tag.create({
    data: { name: 'Technology' },
  });

  const tagProject = await prisma.tag.create({
    data: { name: 'Project' },
  });

  const post1 = await prisma.post.create({
    data: {
      title: 'Initial thoughts on Erlang vs Node.js',
      content: 'The setup difference is huge. Prisma is a time-saver, but Erlang processes seem powerful.',
      published: true,
      authorId: alice.id,
      tags: {
        connect: [{ id: tagTech.id }, { id: tagProject.id }],
      },
    },
    include: {
        tags: true
    }
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Database Schema Finalized',
      content: 'Five tables: User, Profile (1:1), Post (1:M), Tag (M:N). Ready to start coding.',
      published: true,
      authorId: alice.id,
      tags: {
        connect: [{ id: tagTech.id }],
      },
    },
    include: {
        tags: true
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });