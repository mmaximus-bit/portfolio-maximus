// ----- INÍCIO DO CÓDIGO -----

// No Next.js (App Router), podemos tornar a nossa página "async" (assíncrona)
// para que ela possa esperar por dados (como os do nosso backend).

// 1. Criamos uma função separada para buscar os dados
async function getBackendData() {
  try {
    // IMPORTANTE: Esta chamada 'fetch' acontece NO SERVIDOR, 
    // não no navegador do utilizador.
    // Estamos a ligar ao nosso NestJS que está em http://localhost:3001
    const res = await fetch('http://localhost:3001', { 
        cache: 'no-store' // Diz ao Next.js para não guardar esta resposta em cache
    });

    if (!res.ok) {
      // Se a resposta do servidor for um erro (ex: 500)
      throw new Error('Falha ao buscar dados do backend');
    }

    // Convertemos a resposta em JSON
    return res.json();

  } catch (error) {
    console.error('ERRO AO BUSCAR DADOS DO BACKEND:', error);
    // Se o nosso NestJS estiver desligado, o 'fetch' vai falhar
    // e vamos cair neste 'catch'.
    return { error: 'Não foi possível ligar ao backend. O servidor NestJS está a correr?' };
  }
}


// 2. A nossa página agora é 'async'
export default async function Home() {
  
  // 3. Chamamos a função e esperamos (await) que os dados cheguem
  const data = await getBackendData();

  // 'data' será algo como: { message: '...', author: '...' }
  // OU será: { error: '...' } se algo falhar

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#111',
      color: '#EEE'
    }}>
      
      <h1>Bem-vindo ao Meu Portfólio Full-Stack!</h1>
      
      <div style={{
        marginTop: '40px',
        padding: '20px 40px',
        border: '1px solid #555',
        borderRadius: '8px',
        backgroundColor: '#222',
        textAlign: 'center'
      }}>
        
        <h3 style={{ marginTop: '0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>
          Mensagem do Meu Back-end (NestJS):
        </h3>
        
        {/* 4. Verificamos se 'data' contém um erro */}
        {data.error ? (
          // Se tiver erro, mostramos a mensagem de erro
          <p style={{ color: '#FF6B6B' }}>{data.error}</p>
        ) : (
          // Se não tiver erro, mostramos os dados!
          <>
            <p style={{ fontSize: '1.2rem', color: '#00D8FF' }}>
              "{data.message}"
            </p>
            <p style={{ color: '#999' }}>
              - Assinado: {data.author}
            </p>
          </>
        )}
      </div>

    </main>
  );
}
// ----- FIM DO CÓDIGO -----