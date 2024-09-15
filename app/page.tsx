import Image from "next/image";
import profile from "@/public/profile.jpg";
import tokokeramik from "@/public/tokokeramik.png";
import programming from "@/public/survey-programming.png";
import { SiTypescript, SiRust, SiC, SiPython, SiNeovim } from "react-icons/si";
import { Experience, IconSkill, Project, Title } from "@/components";
import { FaAws } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center">
        <Image
          src={profile}
          alt="Profile"
          className="rounded-full mx-auto mb-4"
          width={150}
          height={150}
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">Muhammad Nur Rahman</h1>
        <p className="text-md md:text-lg lg:text-xl text-gray-600/80">Junior Software Engineer with 4 years of experience</p>
      </div>

      <div className="mt-12">
        <Title name="About" />
        <p className="text-gray-600/80 prose md:prose-lg lg:prose-xl">Saya memiliki pengalaman dalam pengembangan perangkat lunak dan manajemen operasional. Menguasai beberapa bahasa pemrograman, saya telah memimpin tim untuk mencapai tujuan perusahaan. Saya juga membantu lebih dari 40 toko keramik di Indonesia memasarkan produk secara online dan meningkatkan omset. Dengan keahlian dalam negosiasi, saya mampu menjadi Sales Consultant terbaik beberapa bulan berturut-turut. Saya siap berkontribusi pada kesuksesan perusahaan.</p>
      </div>

      {/* Skills Section */}
      <section className="mt-12">
        <Title name="Tools" />
        <div className="md:flex md:justify-between grid grid-cols-3 gap-3">
          <IconSkill name="Typescript" icon={<SiTypescript />} style="hover:text-[#3178c6]" />
          <IconSkill name="Rust" icon={<SiRust />} style="hover:text-[#b7410e]" />
          <IconSkill name="C" icon={<SiC />} style="hover:text-[#045c9b]" />
          <IconSkill name="Python" icon={<SiPython />} style="hover:text-[#ffde53]" />
          <IconSkill name="AWS" icon={<FaAws />} style="hover:text-[#ff9900]" />
          <IconSkill name="NeoVim" icon={<SiNeovim />} style="hover:text-[#6ba951]" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <Title name="Impactful Projects" />
        <Project
          title="Toko Keramik Indonesia"
          href="https://www.tokokeramik.com"
          imageSrc={tokokeramik}
          description="
          Tokokeramik Indonesia adalah sebuah platform yang memudahkan pemilik toko keramik untuk menjual barang secara online dan semuanya gratis. Saya membuat keseluruhan sistem tokokeramik.com dan saya bertanggung jawab atas pengembangan, logika bisnis dan aplikasi, dan pemeliharaan keseluruhan situs menggunakan berbagai teknologi."
          technology={[
            "Bahasa pemrograman: Rust dan TypeScript",
            "Framework: Actix-web dan Next.js",
            "Platform Cloud: AWS S3, AWS Amplify, Azure VM",
            "Database: PostgreSQL dan MongoDB"
          ]}
          dampak={[
            "Membantu lebih dari 40 toko keramik di indonesia untuk memasarkan produk secara online",
            "Berkontribusi untuk industri bahan bangunan yang lebih baik"]} />
      </section>

      <section className="mt-12">
        <Title name="Fun Projects" />
        <Project
          title="Survey Bahasa Pemrograman"
          href="https://main.dns66h5rapcke.amplifyapp.com/"
          imageSrc={programming}
          description="Akhir-akhir ini, banyak YouTuber dan influencer di dunia coding yang berbagi pendapat tentang bahasa pemrograman yang mereka kurang sukai. Untuk itu, saya membuat proyek sederhana ini untuk mengetahui mana bahasa pemrograman yang paling banyak disukai dan mana yang paling jarang diminati."
          technology={[
            "Bahasa pemrograman: Python dan Typescript",
            "Framework: Next.js (frontend)",
            "Platform Cloud: AWS Lambda, AWS Api Gateway, AWS Amplify",
            "Database: Supabase"
          ]}
          dampak={[]} />
      </section>

      {/* Experience Section */}
      <section className="mt-12">
        <Title name="Experience" />
        <div className="space-y-4">
          <Experience
            role="Supervisor Operasional"
            companyName="PT Subur Makmur Jaya"
            startYear="2022"
            endYear="2023"
            description="Saya memimpin tim untuk bekerja sama mencapi tujuan perusahaan dalam operasional dan pencapaian omset setiap bulannya. "
            keterampilan={["Leadership", "Team Management", "Komunikasi atau Public Speaking"]}
            dampak={["Mencapai omset bulanan yang harus lebih tinggi dari bulan ke bulan", "Mengurangi keselisihan stok untuk kebanyakan sku"]} />
          <Experience
            role="Web Developer"
            companyName="CV Borneo Corner"
            startYear="2022"
            endYear="2022"
            description="Saya berperan untuk membuat keseluruhan tampilan dashboard admin menggunakan berbagai teknologi."
            keterampilan={["Typescript", "Nextjs", "CSS"]}
            dampak={["Membuat tampilan dashboard sesuai keinginan client"]} />
          <Experience
            role="Marketing Specialist"
            companyName="CV Kerajaan Keramik"
            startYear="2018"
            endYear="2022"
            description="Saya berperan untuk menjual keramik dan granit langsung kepada pelanggan dengan menerapkan teknik mejual yang terbaik."
            keterampilan={["Negosiasi", "Komunikasi", "Pemahaman produk yang sangat kuat"]}
            dampak={["Menjadi Sales Consultant terbaik dalam beberapa bulan berturut turut dengan pencapaian omset dan quantity terbanyak."]} />
        </div>
      </section>

      <section className="text-center mt-10">
        <p className="text-gray-600/50 text-sm">Dibuat oleh Saya Sendiri</p>
      </section>
    </div>
  );
}
