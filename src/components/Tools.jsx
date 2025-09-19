function Tools({ icon, title, description }) {
  return (
    <div className="flex flex-col px-12 py-6 gap-3 bg-gray-50 rounded-md shadow-xl hover:cursor-pointer hover:scale-105 duration-300 delay-100 ease-in-out">
      <img src={icon} alt="article log" className="size-6" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default Tools;
