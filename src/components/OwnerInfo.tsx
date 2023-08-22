interface OwnerInfoProps {
  name: string | undefined;
  profileImg: string | undefined;
}

const OwnerInfo = (props: OwnerInfoProps) => {
  return (
    <section className="flex gap-16 pb-5 mt-10 border-b-2 sm:gap-56 md:gap-10">
      <span>
        <h2 className="text-2xl font-medium">Hosted By {props.name}</h2>
        <h2>4 guests · 2 bedrooms · 3 beds · 1 bathroom</h2>
      </span>
      <img
        src={props.profileImg}
        className="object-cover w-12 h-12 rounded-full md:w-14 md:h-14"
        alt=""
      />
    </section>
  );
};
export default OwnerInfo;
