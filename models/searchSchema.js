var schema = (
  <Schema>
    <Property
      name="description"
      required
      label="Message"
      input={<textarea placeholder="Start typing here..." />}
    />
    <Property
      name="email"
      label="Email"
      required
      input={<input type="email" />}
      validate={function(v) { return /.+\@.+\..+/.test(v) }}
    />
  </Schema>
)