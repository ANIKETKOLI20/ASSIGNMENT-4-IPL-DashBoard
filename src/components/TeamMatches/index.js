// Write your code here
.link-item {
  text-decoration: none;
}

.team-card {
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: #475569;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  min-height: 100px;
  width: 40vw;
}

.image {
  width: 50px;
  height: 50px;
}

.para {
  font-size: 15px;
  font-weight: 500;
  font-family: 'Bree Serif';
  color: white;
  margin-left: 10px;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .image {
    width: 80px;
    height: 80px;
  }

  .para {
    font-size: 25px;
    margin-left: 30px;
  }
}
