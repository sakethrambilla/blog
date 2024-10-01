import Link from "next/link";

interface AddCard {
  title: string;
  redirectUrl: string;
}
function AddCard(props: AddCard) {
  const { title, redirectUrl } = props;
  return (
    <Link
      href={redirectUrl}
      className="flex h-32 w-72 items-center justify-center rounded-2xl border text-secondary-foreground transition-all duration-300 hover:scale-110 hover:shadow-md"
    >
      <h2 className="text-lg">{title}</h2>
    </Link>
  );
}
export default AddCard;
