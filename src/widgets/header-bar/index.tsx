const HeaderBar = ({
  title = "",
}) => {
  return (
    <>
      <div class="bg-primary py-4">
        <p class="text-2xl font-semibold text-white dmFont text-center uppercase tracking-wide">{title ? title : null}</p>
      </div>
    </>
  );
};
export default HeaderBar;
