const Estate = ({estates}) => {
    const {id, estate_title, segment_name, description, price, status, area,location, image, facilities} = estates;
    return (
        <div className="lg:mt-14 h-full md:mt-8 mt-4 card bg-base-100 shadow-xl w-11/12 m-auto">
  <figure><img className="lg:h-80 h-56 md:h-52 w-full mx-4 my-2 lg:rounded-2xl rounded-md shadow" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title lg:text-3xl text-xl font-extrabold">{estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Estate;