import React from 'react';
import styled from 'styled-components';

export default () => <>
  <MeinardParalax />
  <LiepupeParalax/>
</>

const LiepupeParalax =  styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://www.liepupesmuiza.lv/themes/straw_extended/images/home/top_backgrounds/1.jpg');
`;

const MeinardParalax =  styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://lh3.googleusercontent.com/eqRhtkm7zmydig9xBdIowPxlawLz1UN5PrBWqMV8YW1lQjVT78G936xR4DKTmRlZDYsLGYvJEZzcQLz1kv51hEBkRlX-ZFZ67vkPH8gN2huok1A1FN_qEVDrRvzsIcFd73N6sk3CUi2BZWREnpcMRwhWgmdrOepW9A3LPL6JsCkxMV9XHuecH1V866dpZ09uf1ZGty9WY5dLQdkcCBeKbcX9GVbDOG3g_iua4xCIvY1dql34iuKUt4snkuhMZeaV-N4lcp3Culi88-8Qh-Hn9YseZbF7pcpYuuC8Ie78-y6kGDA7eQA0JJ7geRv8I7_Xx1rg7yQrFGWmu9QefV7zU6XMuuqVXWZi7PXhAgpuiEr9sMm1jCBR8dwOZd3LyN8M4IxBkdoYcop_bHNUAELZkNtjTuvm16TNYf2lxIF0HPNu95jX7lc9b0KHOVHI2D4Oj1MbYM0MQXuQSpuyN-8uSwL1AolCKroQg7pFcEyDvknG3TGzT-FMi1VBo5hnsasQrMUPWbrQUyqx_3S2yr9KE_ecIOAJa8n4lYxjmkjXcuhzr_vVpAojGTTUtEk7yhBWtDDzM5JvouhnRjYpJ1oqCcbt65wOXwCj2ly-toBiT_cuYCXqGOYEMwP8GpJ-3sU6lpVNbjqqaaQAE42gmob2Hy8PB4Skemj-aCo5gEis4QrosKZD72DopycMBkP3ug=w3372-h1896-no?authuser=0');
`;
