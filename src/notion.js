import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

export const getPage = async () => {
  const payload = {
    path: `databases/${database_id}/query`,
    method: "POST",
  };
  const { results } = await notion.request(payload);

  const videos = results.map((page) => {
    return {
      date: page.properties.날짜.date.start,
      name: page.properties.이름.title[0].text.content,
      descriptions: page.properties.Description.rich_text[0].text.content,
      tags: page.properties.태그.rich_text[0].text.content,
    };
  });
  return videos;
};
