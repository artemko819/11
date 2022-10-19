import React from "react";
import { Accordion } from "flowbite-react";
import ColorStain from "../components/ui/ColorStain";
import { getDomainName } from "../utils/utils";

const FAQ = () => (
  <>
    <ColorStain size={300} color="orange" className="u-left-75" />
    <div className="h-full w-full flex justify-center items-center">
      <div className="blur-bg w-full  rounded-lg accordion">
        <div className="p-8">
          <h2 className="text-center font-bold text-3xl">Вопросы и ответы</h2>
          <p className="my-5">
            Здесь вы можете узнать ответы на наиболее часто задаваемые вопросы
          </p>
          <Accordion flush alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="text-accent">
                  Что за реферальная программа и как на ней заработать?
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-2">
                  Реферальная программа – программа начисления процентов, с
                  обменов, приведённых Вами клиентов. Иными словами, мы рады и
                  готовы делиться с Вами вознаграждением. Зарабатывайте с нами.
                  Как? Расскажите о нас, делитесь Вашей индивидуальной ссылкой с
                  друзьями, знакомыми, размещайте наш рекламный материал на
                  Ваших сайтах, и получайте проценты с обменных операций
                  приведённых пользователей.
                </p>
                <p className="my-2">
                  Что нужно сделать, для участия в программе? Всё просто. Для
                  этого, Вы должны зарегистрироваться на сайте. Логин и пароль
                  приходит на указанную Вами почту. Ваша реферальная ссылка
                  будет находиться, в Вашем личном кабинете. Главное условие.
                  Программа начисления вознаграждения, работает, только при
                  переходе Вашего реферала по Вашей реферальной ссылке.
                </p>
                <p className="my-2">
                  Ваши проценты вознаграждения зависят от приведённых рефералов:
                </p>
                <p className="my-2">
                  1 0,5% с 1-го до 20-го реферала
                  <br />
                  2 0,7% с 21-го до 70-го реферала
                  <br />3 0,9% с 71-го реферала
                </p>
                <p className="my-2">
                  Вознаграждение рассчитывается от суммы обмена, Вашего
                  реферала. В случае если сервис не имеет заработка с
                  проведённого обмена, партнёрское вознаграждение не
                  начисляется. Для вывода партнёрского вознаграждения количество
                  уникальных привлечённых вами клиентов должно быть не менее 3.
                  Партнёрские выплаты производятся на любые, из предложенных
                  сервисом, направления. Минимальная сумма вывода партнёрского
                  вознаграждения 3 доллара США, 150 рублей.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="text-accent">
                  Где я могу отследить статус своей заявки?
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-2">
                  Статус заявки можно отследить в Личном кабинете в пункте
                  «заявки» ( логин и пароль от которого высылаться на Вашу
                  почту, при регистрации, либо при первом создании заявки). Так
                  же мы оповестим Вас, о статусе заявки, по почте.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="text-accent">Для чего нужна верификация карты?</p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-2">
                  Верификация карты для того, чтобы предотвратить
                  несанкционированное снятие средств с карты. В последнее время
                  участились случаи взлома аккаунтов интернет банков, к
                  сожалению злоумышленникам не составляет труда сделать дубликат
                  сим карты и совершить перевод средств. В связи с этим, многие
                  обменные сервисы, чтобы не быть вовлеченными в подобные
                  мошеннические схемы, ввели процедуру верификации карты.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <p className="text-accent">
                  Для чего нужны подтверждения в системе bitcoin?
                </p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="my-2">
                  При получении bitcoin монет, получатель не может сразу ими
                  воспользоваться. Как перевод совершен – он отправляется в сеть
                  Bitcoin для исполнения и должен быть включен в блок, чтобы
                  стать подтверждённым. Процесс включения перевода в состав
                  найденного блока называется подтверждением транзакции.
                  Включение в 1 блок = 1 подтверждение, когда таких
                  подтверждений набирается 2 и выше перевод считается
                  подтвержденным, и операторы {getDomainName()}, в свою очередь,
                  обрабатывают заявку. Такой способ был введен для защиты от
                  повторного пользования одних и тех же bitcoin.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
    {/* <ColorStain size={100} color="blue" /> */}
  </>
);

export default FAQ;