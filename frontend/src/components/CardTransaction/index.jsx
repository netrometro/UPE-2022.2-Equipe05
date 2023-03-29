import './style.css'

export function CardTransaction() {
    return(
        <div className="transaction-card">
          <div className="transaction-card-header">
            <div className='type'>Tipo</div>
            <span className='value'>R$ 0</span>
          </div>
          <div className='transaction-card-title-description'>
            <span className="title">Título</span>
            <span className="description">odescricaodescricaodescricao</span>
          </div>
          <div className='transaction-card-button'>
            <button>Excluir</button>
          </div>
        </div>
    )
}