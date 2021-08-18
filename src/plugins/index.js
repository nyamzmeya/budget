import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import '../assets/style/theme/index.css';

import { Button , Input , Select, Form, FormItem, Option, Card , Alert , Dialog , Icon } from 'element-ui';

let elements =  [Button , Input , Select, Form, FormItem, Option, Card, Alert, Dialog, Icon];

locale.use(lang);

elements.forEach(element => Vue.use(element , {locale}))