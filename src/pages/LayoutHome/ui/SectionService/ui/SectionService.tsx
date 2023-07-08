import style from './SectionService.module.scss'

export const SectionService = () => {
  return (
    <section className={style.service}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <h2 className={style.title}>ЧТО ТАКОЕ POIZON?</h2>

          <p className={style.explanation}>СЕЙЧАС МЫ ВСЕ ОБЪЯСНИМ</p>

          <div className={style.block}>
            <img className={style.poizon} src="/src/shared/assets/photos/poizon.png" alt="Poizon" />

            <div className={style.box}>
              <p className={style.paragraph}>
                В данном видеоролике мы подробно рассказываем о таких маркетплейсах, как Poizon, 95,
                Alibaba.
              </p>
              <p className={style.paragraph}>
                Какой путь проходят вещи перед тем как попасть в руки наших клиентов? -
              </p>
              <p className={style.paragraph}>Вещь которая ко мне придет точно оригинал?</p>
              <p className={style.paragraph}>И главный вопрос почему именно Logistics X?</p>

              <p className={style.paragraph}>
                На все эти вопросы вы можете получить ответ, посмотрев ролик!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
