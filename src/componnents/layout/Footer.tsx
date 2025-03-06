export default function Footer() {
  return (
    <footer className="bg-white text-gray-700  border-top w-full mx-auto grid-container" >
      <div className="container mx-auto   grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact */}
        <div>
          <div className="flex space-x-3 flex-col">
            <img className="w-[150px] h-[50px]" src="feature/Logo.png" alt="Logo" />
            <h2 className="text-[1.125rem] font-semibold">CÔNG TY CỔ PHẦN ĐÀO TẠO TÂM TRÍ LỰC</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-2">
              {/* <img className="w-5" src="phone0.svg" alt="Phone" /> */}
              <p className="text-sm">0939 279 868</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* <img className="w-5" src="mail0.svg" alt="Mail" /> */}
              <p className="text-sm">cskh@tamtriluc.com</p>
            </div>
            <div className="flex items-start space-x-2">
              {/* <img className="w-5 mt-1" src="location-marker0.svg" alt="Location" /> */}
              <p className="text-sm">
                MST: 0314866590 (cấp 29/01/2018, Sở KHĐT TP HCM)
                <br />
                G06 toà Canary, Đảo Kim Cương, P. Bình Trưng Tây, TP. Thủ Đức, TP.HCM
              </p>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="font-semibold text-[1.125rem] mb-4">THÔNG TIN</h3>
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
          <h3 className="font-semibold text-[1.125rem] mb-4">LIÊN HỆ</h3>
          <img className="w-full" src="banner.png" alt="Contact" />
        </div>
      </div>

      {/* <div className="border-t mt-6 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">Copyright © 2025 Tam Tri Luc.</p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-blue-500">
              English
            </a>
            <a href="#" className="hover:text-blue-500">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-500">
              Legal
            </a>
          </div>
          <div className="flex space-x-3">
            <img className="w-6" src="social-icons1.svg" alt="Social" />
            <img className="w-6" src="social-icons2.svg" alt="Social" />
            <img className="w-6" src="social-icons3.svg" alt="Social" />
          </div>
        </div>
      </div> */}

      {/* <div className="fixed bottom-4 right-4 bg-blue-500 p-3 rounded-full shadow-lg">
        <img className="w-6" src="cart-icon1.svg" alt="Cart" />
      </div> */}
    </footer>
  );
}
