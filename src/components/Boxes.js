import map from "../assets/map.png";

const Boxes = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <div className="box border-pink">
        <h4>food - morning and evening</h4>
        <p>
          One pouch or tin of food each per day, half in the morning and half in
          the evening. Maisie can be fussy at times and might not eat one of the
          flavours - if this happens you could try her with the tinned food - a
          quarter tin is a good portion. Occasionally she just won't have
          anything though!
        </p>
        <p>They eat in front of the hearth. Tinx left, Maisie right.</p>
        <p>
          They can have a couple of treats per day. There's a few different ones
          on the windowsill in the kitchen.
        </p>
      </div>
      <div className="box border-pink">
        <h4>Tinx's maladies</h4>
        <p>
          Tinx has respiratory issues at the moment and coughs and wheezes a
          lot. She takes 4 x steroids daily and a new medication to help her
          airways open, 2 x 1/4 tablets daily which are pre-cut for you - you'll
          need to smush this into a small amount of tinned dog food to deliver
          it to her mouth but she's unlikely to reject it. The instructions say
          to have it 30mins before food, so we're giving it to her pre-morning
          walk, feeding them after the walk, then 12 hours later give her next
          dose.
        </p>
        <p>
          Tinx can't really manage steps on her own & needs to be carried up &
          down.
        </p>
      </div>
      <div className="box border-pink bedtime">
        <h4>Bedtime</h4>
        <p>Maisie sleeps in the crate near the bedroom door</p>
        <p>
          Since Tinx's breathing trouble she's found it harder to settle in her
          crate so we're leaving her loose at the moment & she will often be up
          & down from the bed. Maisie is fine to be shut in her crate though.
          She tends to sleep on our heads if she's allowed on the bed so we're
          trying to keep her crate trained at night in spite of Tinx not being.
        </p>
        <p>
          If Maisie gets restless, give her some pats through the side of the
          crate. If she doesn't settle, might as well let her loose as well!
        </p>
      </div>
      <div className="box walk border-pink d-flex flex-row flex-wrap justify-content-between">
        <div className="walk-text">
          <h4>walks - 3 per day</h4>
          <p>
            They have short walks in the morning and night and a longer one
            around 4:30.
          </p>
          <p>
            Take the shoulder bag with you on walks, Tinx can be carried in this
            if she runs out of steam and that way Maisie can still get a
            reasonably brisk walk & not have to go at Tinx's speed.
          </p>
          <p>
            Maisie can be an escape artist, if she starts twisting & wriggling
            on a walk keep an eye on her. The blue velcro harness is harder to
            escape, as is her jacket harness.
          </p>
          <p>
            They are reactive to most other dogs, we tend to keep a wide berth.
          </p>
          <p>
            If they're being stubborn or pulling, the command to get them to
            walk with you is <strong>"This way!"</strong> or
            <strong>"Come on girls!"</strong>.
          </p>
          <p>
            They won't take treats from you on a walk but they will find all
            sorts of tidbits on the street, if they get a bone we try to wrestle
            it off them but it's not always possible. Tinx is extra hungry from
            the steroids so she's determined!
          </p>
          <p>
            There's 4 nice walking spots nearby that I've marked on the map.
          </p>
          <p className="red">The park!</p>
          <p className="purple">The cemetery! (their fave).</p>
          <p className="blue">
            Bit of grass next to beeston rd. good for a short walk.
          </p>
          <p className="green">
            The quarry/holbeck park. (maisie's second fave).
          </p>
          <p>
            If you want to take them further afield (middleton park is nice),
            they're fine in cars although Maisie will whimper.
          </p>
        </div>

        <div className="map">
          <img className="m-2" src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
