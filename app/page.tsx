import Image from "next/image";
import profile from "@/public/profile.jpg";
import tokokeramik from '@/public/tokokeramik.png';
import { SiTypescript, SiRust, SiC, SiPython, SiNeovim } from "react-icons/si";
import { Experience, IconSkill, Title } from "@/components";
import { FaAws } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center">
        <Image
          src={profile}
          alt="Profile"
          className="rounded-full mx-auto mb-4"
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-bold text-gray-600">Muhammad Nur Rahman</h1>
        <p className="text-xl text-gray-600/50">Junior Software Engineer with 5 years of experience</p>
      </div>

      {/* Skills Section */}
      <section className="mt-12">
        <Title name="Tools" />
        <div className="md:flex md:justify-between grid grid-cols-3 gap-3">
          <IconSkill name="Typescript" icon={<SiTypescript />} />
          <IconSkill name="Rust" icon={<SiRust />} />
          <IconSkill name="C" icon={<SiC />} />
          <IconSkill name="Python" icon={<SiPython />} />
          <IconSkill name="AWS" icon={<FaAws />} />
          <IconSkill name="NeoVim" icon={<SiNeovim />} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <Title name="Impactful projects" />
        <div className="bg-white mb-8 p-2 border rounded">
          <div className="md:flex gap-3 p-4">
            {/* Image Section */}
            <div className="md:w-1/3 flex justify-center mb-2 md:block">
              <Image
                src={tokokeramik}
                alt="Tokokeramik"
                className="rounded"
                width={400}
                height={400}
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 space-y-3">
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-600">Tokokeramik Indonesia</h3>

              {/* Website Link */}
              <a
                href="https://www.tokokeramik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://www.tokokeramik.com
              </a>

              {/* Description */}
              <p className="text-gray-600/80">
                Tokokeramik Indonesia adalah sebuah platform yang memudahkan pemilik toko keramik untuk menjual barang secara online dan semuanya gratis
              </p>

              <div className="">
                <h4 className="text-gray-600 font-medium">Keterampilan dan Teknologi:</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600/80">
                  <li>Bahasa pemrograman: Rust dan TypeScript</li>
                  <li>Framework: Actix-web dan Next.js</li>
                  <li>Platform Cloud: AWS S3, AWS Amplify, Azure VM</li>
                  <li>Database: PostgreSQL dan MongoDB</li>
                </ul>
              </div>

              <div className="">
                <h4 className="text-gray-600 font-medium">Dampak dan Kontribusi</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600/80">
                  <li>Membantu lebih dari 40 toko keramik di indonesia untuk memasarkan produk secara online</li>
                  <li>Berkontribusi untuk industri bahan bangunan yang lebih baik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-12">
        <Title name="Experience" />
        <div className="space-y-4">
          <Experience
            role="Operations Supervisor"
            companyName="PT Subur Makmur Jaya"
            startYear="2022"
            endYear="2023"
            description="Saya memimpin tim untuk bekerja sama mencapi tujuan perusahaan dalam operasional dan pencapaian omset setiap bulannya. "
            keterampilan={["Leadership", "Team Management", "Komunikasi atau Public Speaking"]}
            dampak={["Mencapai omset bulanan yang harus lebih tinggi dari bulan ke bulan", "Mengurangi keselisihan stok untuk kebanyakan skuSaya"]} />
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
    </div>
  );
}
