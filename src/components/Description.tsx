interface DescriptionProps {
  desc: string | undefined;
}

const Description = (props: DescriptionProps) => {
  return <section className="mt-10 md:w-full">{props.desc}</section>;
};
export default Description;
