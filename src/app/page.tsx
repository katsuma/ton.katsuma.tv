import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="mb-12 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
        <h1 className={`mb-3 text-2xl lg:text-4xl font-semibold`}>TON.KATSUma.TV</h1>
      </div>


      <section className={`mb-3`}>
        <h2 className={`text-2xl font-semibold`}>Tonta is the best.</h2>
        <p>
          <a href="https://r.tabelog.com/tokyo/A1305/A130503/13003984/" title="旨いとんかつ とん太">
              <Image src={`/tonta.jpg`} width={450} height={600} priority={true} alt="旨いとんかつ とん太"/>
          </a>
        </p>
      </section>

      <section className={`mb-3`}>
        <h3 className={`text-xl font-semibold`}>Narikura is so good.</h3>
        <p>
          <a href="https://tabelog.com/tokyo/A1319/A131905/13236380/" title="とんかつ 成蔵">
            <Image src={`/narikura.jpg`} width={360} height={271} priority={false} alt="とんかつ 成蔵" />
          </a>
        </p>
      </section>

      <section className={`mb-3`}>
        <h3 className={`text-xl font-semibold`}>Tonki is good.</h3>
        <p>
          <a href="https://tabelog.com/tokyo/A1319/A131905/13236380/" title="とんかつ とんき">
            <Image src={`/tonki.jpg`} width={240} height={180} priority={false} alt="とんかつ とんき" />
          </a>
        </p>
      </section>

      <section className={`mb-3`}>
        <h4 className={`mb-3 text-l font-semibold`}>Kimukatsu is bad.</h4>
        <p>
          No Image.
        </p>
      </section>

      <footer className={`mt-16`}>
        <p>Copyright © katsuma.tv All Rights Reserved.</p>
      </footer>
    </main>
  );
}
