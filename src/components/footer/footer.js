import React from "react";

const Footer = () => {
  return (
    <div className="background-footer">
      <div className="header-footer">
        <div className="logo">Day la logo</div>
        <div className="menu-footer">
          <ul className="header-menu-footer">
            <li className="list-menu-footer">GIOI THIEU</li>
            <li className="list-menu-footer">DICH VU</li>
            <li className="list-menu-footer">GIAI PHAP</li>
            <li className="list-menu-footer">KHACH HANG</li>
            <li className="list-menu-footer">TUYEN DUNG</li>
            <li className="list-menu-footer">LIEN HE</li>
          </ul>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-content">
          <ul className="list-content content-first">
            <li>Triển khai phần mềm quản trị doanh nghiệp</li>
            <li>Dịch vụ thuê ngoài</li>
            <li>Phát triển ứng dụng</li>
            <li>Tích hợp hệ thống</li>
          </ul>
        </div>
        <div className="footer-content">
          <ul className="list-content">
            <li>Vận tải</li>
            <li>Phân bón – Hóa chất</li>
            <li>Xăng dầu</li>
            <li>Năng lượng</li>
            <li>Phân phối</li>
            <li>Sợi – Dệt – Nhuộm – May</li>
          </ul>
        </div>
        <div className="footer-content">
          <ul className="list-content">
            <li>Cảng & Logistics</li>
            <li>FMCG</li>
            <li>Giáo dục</li>
            <li>Ngân hàng</li>
            <li>Thép & VLXD</li>
          </ul>
        </div>
        <div className="footer-content">
          <ul className="list-content content-last">
            <li>
              Tầng 2, tòa nhà Lutaco, 173A Nguyễn Văn Trỗi, Phường 11, Quận Phú
              Nhuận, TP. HCM
            </li>
            <li>Điện thoại: 0964.999.580</li>
            <li>Fax: (84 – 28) 3547 2426</li>
            <li>Hotline: 0964.999.580</li>
            <li>E-mail Us: contact@ssg.vn</li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p className="license">
          <br></br> Bản quyền © 2023 thuộc Công ty SSG.
        </p>
        <p className="icon-footer">
          <i className="icon-zoom fab fa-facebook-square icon-last"></i>
          <i className="icon-zoom fab fa-youtube icon-last"></i>
          <i className="icon-zoom fab fa-tiktok icon-last"></i>
          <i className="icon-zoom fab fa-linkedin icon-last"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
