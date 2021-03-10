# INUI testing task

# Cсылка на сборку https://volkov85.github.io/inui-test/

# Frontend часть

## Выполненный объем работ:
- настроено окружение, в т.ч. GULP, package.json, линтеры
- подключены шрифты в формате woff и woff2 (шрифт Classic Console не был найден, заменил на похожий ArcadeClassic), настроена предзагрузка шрифтов через link preload
- основной цвет шрифта #34383F заменил на более яркий #9C9C9C, так как текущий практически не видно на темном фоне
- настроил автоматическое сжатие всех изображений скриптами на этапе сборки, а также минификацию html, css и js файлов
- сделал разметку по методологии БЭМ
- настроил стилизацию по блокам с помощью препроцессора SASS
- экспортировал все иконки и элементы дизайна в векторном формате SVG (часть иконок Figma экспортировала неверно, были заменены аналогами)
- верхнее меню (все кнопки реагируют на hover, для других состояний требуется styleguide или согласование с дизайнером)
- слайдер с изображениям игр (элементы реагируют на hover, подключена и настроена библиотека Swiper)
- стандартный курсор заменен на кастомный
- сверстаны блоки news и now playing с помощью Flexbox
- добавлен сайдбар info с помощью Grid сетки

## Дальнейшие работы по верстке
- сверстать все дополнительные попапы или временные заглушки вместо них
- настроить адаптивность по согласованию с дизайнером или с помощью дополнительных макетов (от минимального размера экрана до максимального 4К Retina или выше)
- доработать эффекты для всех состояний (hover, focus, active)

### Создать SPA на основе верстки
- подключить библиотеку React, настроить Webpack
- разбить страницу на компоненты
- настроить роутинг через React Router
- подключить Redux, создать глобальный Store, описать reducers
- с помощью Axios настроить получение данных с сервера (сгенерировать моковые данные, если пока нет бэкенда)
- заменить все hardcoded данные из разметки на полученные с сервера или из моков
- покрыть код проекта тестами, написать тесты для всех компонентов, редьюсеров, асинхронных операций, actions