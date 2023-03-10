import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home = ({ exploreData, cardData }) => {
  return (
    <div>
      <Head>
        <title>Alamin AirBNB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl px-8 sm:px-16 mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl pb-6 font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item, idx) => (
              <SmallCard key={idx} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl py-8 font-semibold">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((card, idx) => (
              <MediumCard key={idx} card={card} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoor"
          description="Wishlist curated by Airbnb"
          btnText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/PM4N");
  const exploreData = await res.json();

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};
export default Home;
