<h4>Реализованная функциональность</h4>
<ul>
    <li>Обнаружение дыма</li>
    <li>Обнаружение огня</li>
    <li>Обнаружение пожара, с помощью AQI</li>
</ul> 
<h4>Особенность проекта в будущем:</h4>
<ul>
 <li>Вероятность самотушения пожара</li>
 <li>Оценка вероятности распостранения лесного пожара</li>
 <li>Оценка ущерба лесного пожара</li>
 </ul>
<h4>Основной стек технологий:</h4>
<ul>
    <li>PERN+G(TFjs,YOLO)</li>
    <li>PostreSQL.</li>
    <li>ReactJS</li>
    <li>NodeJS</li>
    <li>GraphQL</li>
    <li>TensorflowJS</li>
    <li>YOLOv5</li>
	<li>Python</li>
	<li>JavaScript, Python</li>
	<li>Styled-components</li>
	<li>SMACSS</li>
	<li>Git</li>
  
 </ul>
<h4>Демо</h4>
<!-- 
<p>Демо сервиса доступно по адресу: http://demo.test </p>
<p>Реквизиты тестового пользователя: email: <b>testuser@test.ru</b>, пароль: <b>testuser</b></p> -->


СРЕДА ЗАПУСКА
------------
1) развертывание сервиса производится на ubuntu linux (ubuntu 20.04)
2) требуется установленный NodeJS(версия 16.13.0)&Python(3.9.5) в VPS сервер
3) требуется установленная Docker
4) требуется установленный YOLO, Tensorflow, PyTorch, Cuda, Conda, CV


УСТАНОВКА
------------
### База данных

Вруби PostgreSQL на Docker
~~~
docker-compose up -d
~~~
### Выполнение миграций

В корневой папке: 
~~~
npm run migrate
~~~

### Установка зависимостей проекта

Установка зависимостей осуществляется с помощью [npm]. Если у вас его нет вы можете установить его по инструкции
вместе с NodeJS на [https://nodejs.org/en/]

После этого выполнить команду в директории проекта:

~~~
npm i
~~~

Запуск нейросети 

python detect.py --source fire.mp4 --weights fire.pt --conf 0.55 || python detect.py --source smoke.mp4 --weights smoke.pt --conf 0.35

РАЗРАБОТЧИКИ

<h4>Оконешников Иван fullstack https://t.me/teseyoaoki9208 </h4>
<h4>Оконешников Кынат fullstack https://t.me/baiwing </h4>
<h4>Соловьев Айсен Manager https://t.me/AisenSolovev </h4>
<h4>Тагрова Дарина Designer https://t.me/darinatagrova </h4>
<h4>Иванов Ньургун front-end https://t.me/Likhaaaan </h4>


