import { Link } from 'react-router-dom';

const SingleProduct = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto mt-7">
      <div>
        <div className="flex items-center gap-4 w-[548px]">
          <Link to={'/'} className="flex items-center gap-[10px] px-6 py-4">
            <img src="\images\arrow-left.svg" alt="" />
            <h5>Back</h5>
          </Link>
          <div className="px-6 py-4">
            <ul className="flex items-center justify-end gap-2">
              <li className="text-base text-[#A1A1A1] ">Catalogue &gt;&gt;</li>
              <li className="text-base text-[#A1A1A1]">Mide Chair &gt;&gt;</li>
              <li>Red Oval Mide Chair</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[77px] mt-16">
          <div className="w-[577px] mt-3">
            <div className="rounded-3xl border border-[#EBEBEB]">
              <img
                className="w-[466px] h-[466px] mx-auto my-20"
                src="/images/image-13.png"
                alt="img13"
              />
            </div>
            <div className="flex gap-40  mt-8 items-center w-[100%] py-6 border-b border-[#DCDCDC] ">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#131D15]">Colors</h3>
                <h4 className="text-xl font-medium text-[#131D15]">Red</h4>
              </div>
              <div className="w-[304px] h-[80.4px] flex gap-5">
                <div className="py-1 px-3 flex items-center justify-center border-[0.62px] border-[#DCDCDC] rounded-3xl">
                  <img src="/images/image-18.png" alt="img18" />
                </div>
                <div className="flex items-center justify-center py-1 px-3 border  border-[#333] border-opacity-55  rounded-3xl">
                  <img src="/images/image-16.png" alt="img16" />
                </div>
                <div className="py-1 px-3 flex items-center justify-center border-[0.62px] border-[#DCDCDC] rounded-3xl">
                  <img src="/images/image-17.png" alt="img17" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[535px] h-[375px] py-6 border-b border-b-[#DCDCDC]">
            <div className="p-[10px] h-9 w-20 text-xs font-normal bg-[#EDF2EE] rounded-md mb-6">
              Mide Chair
            </div>
            <h2 className="text-4xl font-bold text-[#131D15]">
              Red oval Mide Chair
            </h2>
            <div className="flex items-center mt-3 gap-1">
              <img src="/images/Star.png" alt="star" />
              <div className="text-base font-medium">
                4.5k <span className="text-[#A1A1A1]">15k+ Reviews</span>
              </div>
            </div>
            <h6 className="text-base text-[#333] font-normal mt-6">
              The Red Oval Mide Chair is a stunning blend of contemporary design
              and exceptional comfort. Its bold color and unique oval shape make
              it a standout piece in any room, offering both visual appeal and
              practical seating.
            </h6>
            <div className="flex items-center justify-between w-[472px] mt-5">
              <h2 className="text-4xl font-bold text-[#131D15]">$260.00</h2>
              <button className="px-6 py-4 bg-[#202020] text-white text-center text-sm font-medium rounded-[50px] hover:bg-transparent hover:text-black hover:border">
                Add to Cart
              </button>
            </div>
            <div className="w-[535px] h-[409px] pt-10 pb-4 mt-20 border-b border-b-[#DCDCDC]">
              <div className="p-[10px] flex items-center h-14 text-base font-medium text-black bg-[#EDF2EE] rounded-[30px] mb-6">
                <ul className="flex items-center">
                  <li className="bg-white py-[10px] px-7 rounded-3xl mr-6">
                    Product Details
                  </li>
                  <li className="mr-10">Packaging Details</li>
                  <li>Shipping Details</li>
                </ul>
              </div>
              <div className="text-base text-[#333] font-normal">
                <h6>
                  Make a bold statement with the Red Oval Mide Chair, where
                  contemporary design meets comfort, offering a stylish and
                  functional addition to any room.
                </h6>
              </div>
              <div className="flex items-center gap-[30px] w-[508px] mt-12">
                <div className="py-[30px] px-[15px] border border-[#DCDCDC] rounded-2xl">
                  <div className="flex items-center ">
                    <img src="/images/ruler.png" alt="ruler" />
                    <h3 className="text-base font-medium text-[#131D15]">
                      Size
                    </h3>
                  </div>
                  <div className="w-[202px] h-[64px] flex flex-col gap-5 mt-5">
                    <div className="flex items-center justify-between">
                      <h3>Height</h3>
                      <h3>28 inches</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3>Width</h3>
                      <h3>24 inches</h3>
                    </div>
                  </div>
                </div>
                <div className="py-[30px] px-[15px] border border-[#DCDCDC] rounded-2xl">
                  <div className="flex items-center ">
                    <img src="/images/setting.png" alt="ruler" />
                    <h3 className="text-base font-medium text-[#131D15]">
                      Make
                    </h3>
                  </div>
                  <div className="w-[202px] h-[64px] flex flex-col gap-5 mt-5">
                    <div className="flex items-center justify-between">
                      <h3>Seat</h3>
                      <h3>Upholstery</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3>Legs</h3>
                      <h3>Study Iron</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1200] h-[316px] mx-auto mt-20">
          <div className="flex items-center justify-between mb-6 w-[1189px] mx-auto">
            <h3 className="text-2xl font-bold text-[#131D15]">
              Reviews & Ratings
            </h3>
            <h4 className="text-base font-medium text-[#131D15]">
              See All Reviews
            </h4>
          </div>
          <div className="flex gap-[46px] mx-auto w-[1200px] ">
            <div className="w-[578px] p-5 rounded-3xl border border-[#DCDCDC]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-3">
                  <img src="/images/ellipse-1.png" alt="ellipse" />
                  <div>
                    <h3 className="text-base font-bold text-[#131D15]">
                      Fae_Vour
                    </h3>
                    <h4 className="text-[14px] font-normal text-[#A1A1A1]">
                      10 June 2024
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/images/Star.png" alt="star" />
                  <span>4.5k</span>
                </div>
              </div>
              <h6 className="text-base font-normal text-[#333]">
                "I absolutely love the Red Oval Mide Chair! It has completely
                transformed the look of my living room. The vibrant red color
                adds such a lively touch, and the unique oval shape makes it a
                real conversation piece. It's not just beautiful to look at –
                it's incredibly comfortable too. The padding is just right, and
                the fabric feels very high-quality. The iron legs are sturdy and
                give it a solid feel. I’ve received so many compliments from
                friends and family. Definitely worth the purchase!"
              </h6>
            </div>
            <div className="w-[578px] p-5 rounded-3xl border border-[#DCDCDC]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-3">
                  <img src="/images/ellipse-2.png" alt="ellipse" />
                  <div>
                    <h3 className="text-base font-bold text-[#131D15]">
                      Fae_Vour
                    </h3>
                    <h4 className="text-[14px] font-normal text-[#A1A1A1]">
                      24 June 2024
                    </h4>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src="/images/Star.png" alt="star" />
                  <span>4.5k</span>
                </div>
              </div>
              <h6 className="text-base font-normal text-[#333]">
                The Red Oval Mide Chair is a fantastic addition to my home
                office. I was looking for something stylish yet comfortable, and
                this chair fits the bill perfectly. The design is modern and
                sleek, and the red color really pops. It's comfortable to sit in
                for long periods, which is important for me since I work from
                home. The iron legs provide great stability, and the overall
                construction feels very durable. My only slight gripe is that I
                wish it were a tad bit taller, but it works well with my desk
                setup. Overall,
              </h6>
            </div>
            {/* second container */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
