<template>
  <el-dialog center :title="title" :visible.sync="innerVisible" width="800px">
    <el-form
      v-loading="dialogLoading"
      :model="model"
      :label-position="labelPosition"
      :rules="rules"
      ref="ruleForm"
      label-width="87px"
    >
      <el-row>
        <el-col :span="10" :offset="1">
          <el-form-item
            label="提货联系"
            prop="deliveryName"
            :rules="[
              { required: true, message: '请输入提货联系人', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="model.deliveryName"
              placeholder="请输入提货联系人"
              style="position: relative"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item
            label="提货电话"
            prop="deliveryPhone"
            :rules="[
              { required: true, message: '请输入提货电话', trigger: 'blur' },
              {
                validator: isPhoneOrTel,
                message: '请输入正确的电话号',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="model.deliveryPhone"
              placeholder="请输入提货电话"
              style="position: relative"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="20" :offset="1">
          <el-form-item
            label="提货地址:"
            prop="address"
            :rules="[
              {
                required: true,
                message: '请选择提货省市区',
                trigger: 'change',
              },
            ]"
          >
            <!--<cascade-address level="3" v-model="model.address" placeholder="请选择省市区" style="width: 100%"></cascade-address>-->
            <Cascade-address
              changeOnSelect
              v-model="model.address"
              :level="3"
              style="width: 100%"
              placeholder="请选择省市区"
            ></Cascade-address>
          </el-form-item>
        </el-col>
        <el-col :span="20" :offset="1">
          <el-form-item
            label="详细地址:"
            prop="deliveryAddress"
            :rules="[
              { required: true, message: '请输入详细地址', trigger: 'blur' },
            ]"
          >
            <el-input
              type="textarea"
              :rows="3"
              v-model="model.deliveryAddress"
              placeholder="允许输入200字内"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-form-item
            label="设为默认:"
            prop="isDefault"
            class="noLabel"
            :rules="[
              { required: true, message: '请选择是否默认', trigger: 'change' },
            ]"
          >
            <el-radio-group v-model="model.isDefault">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="24">
          <el-row>
            <el-col class="text-center" :span="5" :offset="6">
              <el-button @click="innerVisible = false" style="width: 100%"
                >取消</el-button
              >
            </el-col>
            <el-col class="text-center" :span="5" :offset="2">
              <el-button
                type="primary"
                :loading="loading"
                @click="submit"
                style="width: 100%"
                >保存</el-button
              >
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>
<script>
import { dotData, copy, confirm } from "@/utils";
import CascadeAddress from "@/components/CascadeAddress";
import { isPhoneOrTel } from "@/utils/validate";

export default {
  components: {
    CascadeAddress,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(val, oldVal) {
      if (val === oldVal) {
        return;
      }
      if (val) {
        // 重置表单
        this.resetFields();
        // 获取数据
        if (this.id) {
          this.getDetail();
        }
      }
      this.innerVisible = val;
    },
    // 如果内部有新值变化，更新外部visible
    innerVisible(val, oldVal) {
      if (val === oldVal) {
        return;
      }
      this.$emit("update:visible", val);
    },
  },
  data() {
    return {
      innerVisible: this.visible,
      labelPosition: "left",
      model: {
        deliveryName: "",
        deliveryPhone: "",
        address: [],
        deliveryAddress: "",
        isDefault: "",
      },
      callBackData: {},
      rules: {
        auditMemo: [
          {
            required: true,
            max: 200,
            message: "允许输入200字内",
            trigger: "blur",
          },
        ],
      },
      detailData: {},
      loading: false,
      dialogLoading: false,
    };
  },
  computed: {
    title() {
      if (this.id) {
        return "编辑";
      } else {
        return "添加新的地址";
      }
    },
  },
  methods: {
    isPhoneOrTel,
    // 修改时，http请求出该id 的详情数据 并回填
    getDetail() {
      this.dialogLoading = true;
      this.$ajax
        .get("/ms-warehouse-order/chDefaultPickupInfo/getPickupInfoById", {
          id: this.id,
        })
        .then((response) => {
          const success = response.success;
          if (success) {
            this.callBackData = response.data || {};
            console.log("22222", this.callBackData);
            this.model.deliveryName = dotData(
              this.callBackData,
              "deliveryName"
            );
            this.model.deliveryPhone = this.callBackData.deliveryPhone;
            this.model.deliveryAddress = this.callBackData.deliveryAddress;
            this.model.isDefault = this.callBackData.isDefault;
            if (
              this.callBackData.deliveryProvinceNo &&
              this.callBackData.deliveryCityNo &&
              this.callBackData.deliveryDistrictNo
            ) {
              this.model.address = [
                this.callBackData.deliveryProvinceNo,
                this.callBackData.deliveryCityNo,
                this.callBackData.deliveryDistrictNo,
                // {id: this.callBackData.deliveryProvinceNo, text: this.callBackData.deliveryProvince},
                // {id: this.callBackData.deliveryCityNo, text: this.callBackData.deliveryCity},
                // {id: this.callBackData.deliveryDistrictNo, text: this.callBackData.deliveryDistrict}
              ];
            }
            console.log("this.model.address", this.model.address);
          }
        })
        .finally((_) => {
          this.dialogLoading = false;
        });
    },
    submit($event) {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) {
          return;
        }
        let submitData = copy(this.model, true);
        submitData.deliveryProvinceNo = submitData.address[0];
        submitData.deliveryCityNo = submitData.address[1];
        submitData.deliveryDistrictNo = submitData.address[2];
        // submitData.deliveryProvinceNo = submitData.address[0].id
        // submitData.deliveryProvince = submitData.address[0].text
        // submitData.deliveryCityNo = submitData.address[1].id
        // submitData.deliveryCity = submitData.address[1].text
        // submitData.deliveryDistrictNo = submitData.address[2].id
        // submitData.deliveryDistrict = submitData.address[2].text
        delete submitData.address; // 收件地址
        if (this.id) {
          submitData.id = this.id;
        }
        let title = this.id ? "修改成功" : "新增成功";
        this.loading = true;
        this.$ajax
          .post(
            "/ms-warehouse-order/chDefaultPickupInfo/addOrUpdatePickupInfo",
            submitData
          )
          .then((response) => {
            const success = dotData(response, "success");
            this.loading = false;
            if (success) {
              this.$emit("refresh", true);
              confirm(title, "提示", {
                type: "success",
                confirmButtonText: "确定",
                showCancelButton: false,
              }).then((_) => {
                this.innerVisible = false;
                this.$emit("refresh", true);
              });
            }
          })
          .finally((_) => {
            this.loading = false;
          });
      });
    },
    resetFields() {
      if (this.$refs["ruleForm"]) {
        this.$refs["ruleForm"].resetFields();
      }
    },
  },
};
</script>