import { Layout } from "../components/Layout";
import { concerts } from "../data/concerts";

const Concerts = () => {
  return (
    <Layout>
      <h1>Concerts</h1>
      <div className="md:flex md:flex-col md:items-center">
        {concerts.list.map((concert) => {
          return (
            <div className="flex py-2 text-left px-2 justify-between items-center border-b-2 border-b-babypowder md:w-5/6 xl:w-4/6">
              <img src={concert.image_src} className="w-1/5 hidden lg:inline" />
              <p>{concert.date}</p>
              <p>{concert.title}</p>
              <p>{concert.location}</p>
              <p className="font-bold">{concert.price}€</p>
              <a
                href={concert.ticket_link}
                target="_blank"
                className="hover:cursor-pointer border-2 border-lightred font-bold p-1 text-center hover:bg-lightred hover:bg-opacity-25"
              >
                BUY TICKET
              </a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Concerts;
