import style from './SectionCountry.module.scss';

export const SectionCountry = () => {
  return (
    <section className={style.country}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <div className={style.block}>
            <h3 className={style.title}>Наш пункт выдачи в Москве</h3>

            <p className={style.paragraph}>
              Если вы живете в Москве, то с легкостью можете посетить наш офис (по совместительству
              пункт выдачи), чтобы получить свою посылку прямиком от наших сотрудников.
            </p>

            <p className={style.paragraph}> Адрес: Смольная улица, 24А, Москва </p>
            <p className={style.paragraph}> Время работы: ПН-ПТ 09:00 - 18:00 </p>
          </div>

          <div className={style.img}>
            <img className={style.map} src="/src/shared/assets/photos/map.png" alt="Poizon" />
          </div>
        </div>
      </div>
    </section>
  );
};
