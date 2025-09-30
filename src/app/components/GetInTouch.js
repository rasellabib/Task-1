export default function GetInTouch() {
  return (
    <section className="container ">
      <div className="relative overflow-hidden mb-120 px-4 py-14 rounded-2xl bg-[#0058FF] ptb-80 plr-180 md:px-8 md:mx-8">
        <div className="relative z-10 mx-auto text-center">
          {/* Title */}
          <h3 className="font-bold text-2 xl sm:text-3xl lg:text-5xl tracking-tight text-white">
            Get In Touch
          </h3>

          {/* Description */}
          <p className="mt-4 text-white leading-relaxed text-sm sm:text-base lg:text-lg">
            Contact us now to enquire our plumbing services, whether you have a
            commercial project that requires support, or a domestic plumbing
            task that needs the attention of a trusted professional.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="javascript:void(0)"
              className="inline-flex items-center sm-text text-[16px]  px-[24px] py-[16px] md:py-[10px] rounded-[8px] font-medium text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100 duration-150 shadow-md"
            >
              Book a Professional Plumber
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
