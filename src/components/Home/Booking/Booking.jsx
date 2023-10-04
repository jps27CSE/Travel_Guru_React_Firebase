const Booking = () => {
  return (
    <div className="w-[300px] h-[420px] bg-white rounded-lg flex justify-center">
      <div className="p-5 flex flex-col">
        <p className="text-xl font-bold ">Origin</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <p className="text-xl font-bold ">Destination</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <p className="text-xl font-bold">To</p>
        <div className="flex flex-col">
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn bg-[#F9A51A] w-full mt-2">Start Booking</button>
      </div>
    </div>
  );
};

export default Booking;
