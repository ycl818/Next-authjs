import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => (
    <div key={topic.id}>
      <Link key={topic.id} href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));

  return <div className="flex flex-row gap-2 flex-wrap">{renderedTopics}</div>;
}
