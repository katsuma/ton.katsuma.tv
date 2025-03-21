export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="mb-12 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
        <h1 className={`mb-3 text-2xl lg:text-4xl font-extrabold`}>TON.KATSU<span className={`font-light px-1`}>ma</span>.TV</h1>
      </div>


      <section className={`mb-8`}>
        <h2 className={`text-2xl font-bold`}>Tonta is the best.</h2>
        <p>
          <a href="https://r.tabelog.com/tokyo/A1305/A130503/13003984/" title="旨いとんかつ とん太">
              <img src={`/tonta.jpg`} width={450} height={600} alt="旨いとんかつ とん太"/>
          </a>
        </p>
      </section>

      <section className={`mb-8`}>
        <h3 className={`text-xl font-bold`}>Narikura is so good.</h3>
        <p>
          <a href="https://tabelog.com/tokyo/A1319/A131905/13236380/" title="とんかつ 成蔵">
            <img src={`/narikura.jpg`} width={360} height={271} alt="とんかつ 成蔵" />
          </a>
        </p>
      </section>

      <section className={`mb-8`}>
        <h3 className={`text-xl font-bold`}>Tonki is good.</h3>
        <p>
          <a href="https://tabelog.com/tokyo/A1319/A131905/13236380/" title="とんかつ とんき">
            <img src={`/tonki.jpg`} width={240} height={180} alt="とんかつ とんき" />
          </a>
        </p>
      </section>

      <section className={`mb-8`}>
        <h4 className={`mb-3 text-l font-bold`}>Kimukatsu is bad.</h4>
        <p className={`font-extralight`}>
          No Image.
        </p>
      </section>

      <footer className={`mt-16`}>
        <p>Copyright © katsuma.tv All Rights Reserved.</p>
      </footer>
    </main>
  );
}
