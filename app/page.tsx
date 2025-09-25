import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '50px'}}>
      <p style={{paddingTop: '100px', paddingBottom: '100px', margin: 0, fontSize: '9.375rem', textAlign: 'center', fontWeight: 350, maxWidth: '3315px'}}>
        Take a deep dive into <span style={{fontWeight: 900, fontStyle: 'italic'}}>Duvor</span> (communal cloth) and <span style={{fontWeight: 900, fontStyle: 'italic'}}>The Miraculous Draught of Fishes</span> (tapestry)
      </p>
      <div style={{display: 'flex', gap: '200px'}}>
        <Image
          src='/next-static/Process_People_card.jpg'
          alt='Process and People'
          width={1020}
          height={1362}
          style={{
            borderRadius: '80px',
            border: '20px solid #CFB06B',
            boxSizing: 'border-box'
          }}
        />
        <Image
          src='/next-static/Behind_Scenes_card.jpg'
          alt='Behind the Scenes'
          width={1020}
          height={1362}
          style={{
            borderRadius: '80px',
            border: '20px solid #CFB06B',
            boxSizing: 'border-box'
          }}
        />
        <Image
          src='/next-static/Materials_Matter_card.jpg'
          alt='Materials Matter'
          width={1020}
          height={1362}
          style={{
            borderRadius: '80px',
            border: '20px solid #CFB06B',
            boxSizing: 'border-box'
          }}
        />
      </div>
    </div>
  );
}
