import Image from "next/image";
import profile from "@/public/profile.jpeg";
import tokokeramik from "@/public/tokokeramik.png";
import programming from "@/public/survey-programming.png";
import awsCloud from "@/public/certi-aws-cloud.jpg";
import restfull from "@/public/certi-restapi.png";
import hackerank from "@/public/certi-hackerank.jpg";
import fullstack from "@/public/certi-fullstack.png";
import { SiTypescript, SiRust, SiC, SiPython, SiNeovim, SiDocker, SiPostgresql, SiMongodb, SiRedis, SiRabbitmq, SiNodedotjs, SiWakatime } from "react-icons/si";
import { Education, Experience, IconSkill, Project, Title } from "@/components";
import { FaAws, FaFilePdf, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl min-h-screen p-3 md:p-6">
      {/* Header Section */}
      <section className="text-center">
        <Image
          src={profile}
          alt="Profile"
          className="rounded-full mx-auto mb-4"
          width={150}
          height={150}
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">Muhammad Nur Rahman</h1>
        <p className="text-md md:text-lg lg:text-xl text-gray-600/85">Junior Programmer</p>

        <div className="mt-4 flex justify-center items-center space-x-5">
          <Link href="https://github.com/sarrahman-me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <FaGithub title="Github" size={28} />
          </Link>

          <Link href="https://www.linkedin.com/in/sarrahman-me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
            <FaLinkedin title="Linkedin" size={28} />
          </Link>

          <Link href="https://www.youtube.com/@sarrahman_dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
            <FaYoutube title="Youtube" size={28} />
          </Link>

          <Link href="https://wakatime.com/@sarrahman" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
            <SiWakatime title="Wakatime" size={28} />
          </Link>

          <Link
            href="https://sarrahman.s3.ap-southeast-1.amazonaws.com/cv.pdf"
            target="_blank"
            className="select-none flex items-center space-x-2 px-4 py-2 border border-gray-600/50 rounded hover:border-gray-600"
          >
            <FaFilePdf />
            <span>Download CV</span>
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="mt-12">
        <Title name="About" />
        <p className="text-gray-600/85 prose md:prose-lg lg:prose-xl">Saya memiliki pengalaman dalam pengembangan perangkat lunak dan manajemen operasional. Menguasai beberapa teknologi, saya telah memimpin tim untuk mencapai tujuan perusahaan. Saya juga membantu lebih dari 40 toko keramik di Indonesia memasarkan produk secara online dan meningkatkan omset. Dengan keahlian dalam negosiasi, saya mampu menjadi Sales Consultant terbaik beberapa bulan berturut-turut.</p>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <Title name="Impactful Projects" />
        <Project
          title="Toko Keramik Indonesia"
          href="https://main.dtusqppnb0kst.amplifyapp.com/"
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

{/*       <section className="mt-12">
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
 */}
      {/* Educations Section */}
      <section className="mt-12">
        <Title name="Education" />
        <Education
          schollName="Pondok Modern Darussalam Gontor"
          startYear="2012"
          endYear="2018"
          description="Saya menjalani pendidikan yang holistik, menggabungkan kurikulum agama dan akademik. Pengalaman ini membentuk karakter saya dengan penekanan pada disiplin, kemandirian, dan kemampuan berpikir kritis. Gontor tidak hanya mengajarkan ilmu, tetapi juga nilai-nilai kepemimpinan yang kuat dan kebiasaan hidup mandiri."
          prestasi={[
            "Terpilih menjadi kader sejak kelas 4 (setara 1 SMA) untuk menjadi bendahara koperasi dengan perputaran dana hingga 2 milyar per tahun",
            "Sangat aktif dalam pramuka dan menjadi salah satu Pasus (Pasukan Khusus) 5",
            "Menjadi ketua konsulat kalimantan yang mengatur kelancaran perjalan santri yang berasal dari kalimantan"
          ]}
        />
      </section>

      {/* Experience Section */}
      <section className="mt-12">
        <Title name="Experience" />
        <div className="space-y-4">
          <Experience
            role="Supervisor Operations"
            companyName="PT Subur Makmur Jaya"
            startYear="2022"
            endYear="2023"
            description="Saya memimpin tim dengan fokus pada kolaborasi yang efektif untuk mencapai tujuan perusahaan, baik dalam hal operasional maupun pencapaian target omset bulanan, sambil memastikan kualitas kerja yang optimal dan pertumbuhan yang berkelanjutan."
            keterampilan={["Leadership", "Team Management", "Komunikasi atau Public Speaking"]}
            dampak={["Meningkatkan omset bulanan secara konsisten dengan pencapaian target yang lebih tinggi setiap bulannya.", "Mengoptimalkan manajemen stok untuk mengurangi ketidaksesuaian pada sebagian besar SKU."]} />
          <Experience
            role="Web Developer"
            companyName="CV Borneo Corner"
            startYear="2022"
            endYear="2022"
            description="Saya bertanggung jawab dalam pengembangan tampilan keseluruhan dashboard admin, memanfaatkan berbagai teknologi untuk menciptakan antarmuka yang fungsional dan menarik."
            keterampilan={["Typescript", "Nextjs", "CSS"]}
            dampak={["Mengembangkan tampilan dashboard yang disesuaikan dengan kebutuhan dan preferensi klien."]} />
          <Experience
            role="Marketing Specialist"
            companyName="CV Kerajaan Keramik"
            startYear="2018"
            endYear="2022"
            description="Saya bertanggung jawab dalam penjualan keramik dan granit langsung kepada pelanggan, dengan menerapkan strategi penjualan yang efektif dan berfokus pada kepuasan pelanggan."
            keterampilan={["Negosiasi", "Komunikasi", "Pemahaman produk yang sangat kuat"]}
            dampak={["Diakui sebagai Sales Consultant terbaik selama beberapa bulan berturut-turut, dengan pencapaian omset tertinggi dan volume penjualan terbesar.", "Membuat beberapa teknologi yang memudahkan dalam opersional dan penjualan"]} />
          <Experience
            role="Guru Bahasa Arab"
            companyName="Pondok Pesantren Al Imam"
            startYear="2017"
            endYear="2018"
            description="Saya mengajar bahasa arab dan menjadi wali kelas 1 SMA"
            keterampilan={["Nahwu", "Sorof", "D. Lughoh"]}
            dampak={["Memberikan materi bahasa arab yang sesuai dengan materi standar"]} />

        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12">
        <Title name="Tools and Technology" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          <IconSkill name="Typescript" icon={<SiTypescript />} style="hover:text-[#3178c6]" />
          <IconSkill name="Rust" icon={<SiRust />} style="hover:text-[#b7410e]" />
          <IconSkill name="C" icon={<SiC />} style="hover:text-[#045c9b]" />
          <IconSkill name="Python" icon={<SiPython />} style="hover:text-[#ffde53]" />
          <IconSkill name="NodeJS" icon={<SiNodedotjs />} style="hover:text-[#44883e]" />
          <IconSkill name="AWS" icon={<FaAws />} style="hover:text-[#ff9900]" />
          <IconSkill name="Docker" icon={<SiDocker />} style="hover:text-[#0db7ed]" />
          <IconSkill name="PostgreSQL" icon={<SiPostgresql />} style="hover:text-[#336791]" />
          <IconSkill name="MongoDB" icon={<SiMongodb />} style="hover:text-[#589636]" />
          <IconSkill name="Redis" icon={<SiRedis />} style="hover:text-[#D82C20]" />
          <IconSkill name="RabbitMQ" icon={<SiRabbitmq />} style="hover:text-[#ff6404]" />
          <IconSkill name="NeoVim" icon={<SiNeovim />} style="hover:text-[#6ba951]" />
        </div>
      </section>

      {/* Certification Section */}
      <section className="mt-12">
        <Title name="Licenses and certifications" />
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2">
          <Image src={hackerank} alt="hackerank" width="200" height="200" />
          <Link href="https://www.linkedin.com/learning/certificates/df3ec3558b9b2a54f28f12e2d3067e6688fcacbbfe6ee60e398c733753e97bc2" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
            <Image src={fullstack} alt="fullstack" width="200" height="200" />
          </Link>
          <Link href="https://www.linkedin.com/learning/certificates/0a6032d3763ad555dfbc31558966ee2f714a877802d6e808a33767619f31fe69" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
            <Image src={restfull} alt="restfull" width="200" height="200" />
          </Link>
          <Link href="https://www.dicoding.com/certificates/ERZRGLQ5NPYV" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-700">
            <Image src={awsCloud} alt="awsCloud" width="200" height="200" />
          </Link>
        </div>
      </section>

      <section className="flex justify-center mt-12">
        <blockquote className="p-6 bg-white rounded-lg border-l-8 border-primary-600 shadow-md max-w-2xl">
          <p className="text-xl italic text-gray-800 leading-relaxed">
            &quot;Kejar dulu skillnya jangan uangnya, kalau kamu kuasai skillnya, mau kamu dibuang dimanapun kamu pasti tetap hidup.&quot;
          </p>
          <p className="mt-4 text-right text-lg font-semibold text-gray-700">
            - Rahman
          </p>
        </blockquote>
      </section>

      <section className="text-center mt-10">
        <p className="text-gray-600/50 text-sm">Dibuat oleh Saya Sendiri</p>
      </section>
    </div>
  );
}
