export default function Footer() {
  return (
    <footer className="bg-white text-gray-700  border-top w-full mx-auto grid-container px-3 mt-[2rem]">
      <div className="container mx-auto   grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact */}
        <div>
          <div className="flex space-x-3 flex-col gap-2 md:border-0 border-b border-gray-300 pb-4">
            <img className="w-[150px] h-[50px]" src="feature/Logo.png" alt="Logo" />
            <h2 className="md:text-[1.125rem] text-[1rem] font-semibold">CÔNG TY CỔ PHẦN ĐÀO TẠO TÂM TRÍ LỰC</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-2">
              <img className="w-5" src="icons/phone.png" alt="Phone" />
              <p className="text-sm font-bold">0939 279 868</p>
            </div>
            <div className="flex items-center space-x-2">
              <img className="w-5" src="icons/mail.png" alt="Mail" />
              <p className="text-sm font-bold">cskh@tamtriluc.com</p>
            </div>
            <div className="flex items-start space-x-2">
              <img className="w-5 mt-1" src="icons/location.png" alt="Location" />
              <p className="text-sm font-bold">
                MST: 0314866590 (cấp 29/01/2018, Sở KHĐT TP HCM)
                <br />
                G06 toà Canary, Đảo Kim Cương, P. Bình Trưng Tây, TP. Thủ Đức, TP.HCM
              </p>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-semibold md:text-[1.125rem] text-[1rem] mb-4">THÔNG TIN</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <a href="#" className="hover:text-blue-500">
                Chính sách bảo mật
              </a>
              {/* <img className="w-3" src="icon-outline-arrow-up-right0.svg" alt="Arrow" /> */}
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Hướng dẫn mua hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Thanh toán và giao hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Chính sách khiếu nại
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Chính sách hoàn trả
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Giấy phép đào tạo kỹ năng sống
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="font-semibold md:text-[1.125rem] text-[1rem] mb-4">LIÊN HỆ</h3>
          <img className="w-full" src="banner.png" alt="Contact" />
        </div>
      </div>
    </footer>
  );
}
