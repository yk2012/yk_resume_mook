/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import MyModal from '@components/MyModal';
 * <MyModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/MyModal';
 * <Confirm />
 */
 import ykDialog from './Dialog';
 import ykConfirm from './Confirm';
 
 export const Dialog = ykDialog;
 export const Confirm = ykConfirm;
 
 export default {
   Dialog: Dialog,
   Confirm: Confirm,
 };
 