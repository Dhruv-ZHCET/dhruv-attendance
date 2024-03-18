const express = require("express");

const router = express.Router();
const { Subject } = require("../db")

router.post("/signal",async (req,res)=>
{
  const colors = req.body;
  const succes = await Subject.findOne({
    subjectName:"Signal and Systems",
  });
  if(!succes){
    const sub = await Subject.create({
      subjectName:"Signal and Systems",
      colors:req.body.colors,
      red:req.body.red,
      green:req.body.green
    })
  }
  else
  {
    const log = await Subject.updateOne({
      "subjectName":"Signal and Systems",
    },
    {
      $set:{
        "colors":req.body.colors,
        "red":req.body.red,
        "green":req.body.green,
      }
    })
  }
  // console.log(sub);
  res.json({
    key:"log created",
  })
})
router.get("/signal",async(req,res)=>
{
  const sub = await Subject.findOne({
    subjectName:"Signal and Systems",
  });
  if(sub)
  {
    res.json({
      sub,
    })
  }
  else res.json({
    log:"no subject found"
  })
})
module.exports = router;