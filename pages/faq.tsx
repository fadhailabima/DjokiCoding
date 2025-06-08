import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import FaqList from "components/organisms/FaqList";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";

const Faq = () => {
  // Data 'faqs' telah dihapus dari sini.

  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center mt-16">
        <div className="w-full sm:w-10/12 md:w-8/12">
          <div className="text-center" data-aos="zoom-in-up">
            <PageSentence badge="FAQs" title="Frequently Asked Questions" />
          </div>
          {/* Komponen FaqList sekarang dipanggil tanpa props */}
          <FaqList
            faqs={[
              {
                title: `Bagaimana sistem pembayarannya?`,
                description: `Jika proyek sudah disepakati, Anda akan membayar uang muka, dan ketika progres mencapai 50% Anda akan melakukan pembayaran kedua, dan ketika progres 100% Anda akan melunasinya.`,
              },
              {
                title: `Bolehkah saya berkonsultasi terlebih dahulu?`,
                description: `Tentu saja Anda bisa berkonsultasi terlebih dahulu dengan kami. Kami sangat senang membantu permasalahan Anda dan memberikan solusi terbaik dari kami. Anda dapat menghubungi kami melalui halaman kontak.`,
              },
              {
                title: `Bagaimana jika proyek berhenti di tengah jalan?`,
                description: `Kami berjanji untuk selalu menyelesaikan proyek tepat waktu, jika terjadi masalah (karena kesalahan kami), semua pembayaran akan dikembalikan. Dan proyek akan dihentikan.`,
              },
              {
                title: `Apakah sudah termasuk server dan domain?`,
                description: `Anda tidak perlu memikirkan hal lain, kami sudah menyiapkan semuanya. Anda hanya perlu memeriksa kemajuan Anda dan memastikan fitur yang Anda inginkan sudah sesuai.`,
              },
              {
                title: `Apakah saya akan mendapatkan kode sumbernya?`,
                description: `Ketika proyek selesai 100%, semua sumber daya, seperti file desain, diagram analisis, kode sumber, dll. akan diberikan kepada Anda. Anda tidak perlu khawatir tentang ini.`,
              },
              {
                title: `Apakah ada garansi?`,
                description: `Garansi 1 tahun untuk error atau kesalahan kami. Jika Anda ingin menambahkan fitur yang tidak termasuk dalam garansi, ada biaya lain per fitur, dan harga tergantung pada tingkat kesulitannya.`,
              },
            ]}
          />
        </div>
      </section>

      <LineDivider />
    </PageTemplate>
  );
};

export default Faq;
