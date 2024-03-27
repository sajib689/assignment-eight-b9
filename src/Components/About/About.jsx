import img from '../../assets/b.png'

const About = () => {
    return (
        <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img
                src={img}
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-4">
                Welcome to Sajib Book, your ultimate destination for book lovers. We are passionate about literature and committed to providing you with the best reading experience. Whether you're looking for classic novels, contemporary fiction, or insightful non-fiction, we've got you covered.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our mission is to inspire and empower readers by offering a diverse selection of books that cater to various interests and genres. With our user-friendly website and exceptional customer service, we strive to make your book-buying journey enjoyable and hassle-free.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                At Sajib Book, we believe in the transformative power of literature to educate, entertain, and enlighten. Join us on this literary adventure as we explore the fascinating world of books together.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;