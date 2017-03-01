<div id="comments">
  <form v-on:submit.prevent="sendComment">
    <table class="table">
      <thead>
        <tr>
          <th colspan="2">ユーザー</th>
          <th colspan="5">コメント</th>
          <th>時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments">
          <td colspan="2">未実装</td>
          <td colspan="5">{{comment.body}}</td>
          <td>{{comment.time}}</td>
        </tr>
        <tr>
          <td colspan="2">未実装</td>
          <td colspan="5"><input type="text" name="" value="" v-model="form.body"></td>
          <td><button type="button" name="button" class="btn btn-primary">送信</button></td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
