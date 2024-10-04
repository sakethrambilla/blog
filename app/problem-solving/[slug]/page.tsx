import TextEditorView from "@/components/text-editor-view";
import MainLayout from "@/layout/main-layout";
import prisma from "@/lib/db";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageProps {
  params: { slug: string };
}
const Page = async ({ params }: PageProps) => {
  const data = await prisma.problem.findFirst({ where: { slug: params.slug } });
  console.log(data?.content);
  if (!data) return <></>;

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-start justify-center gap-8 p-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/problem-solving">
                Problem Solving
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl text-primary">{data?.title}</h1>
        <div className="flex w-full flex-col items-start gap-4">
          <p>{data?.difficulty_level}</p>
          <TextEditorView content={data.content} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
