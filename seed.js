require("dotenv").config();

const mongoose = require("mongoose");

const Teams = require("./features/teams/model/teamsModel");
const Vendors = require("./features/vendors/model/vendorsModel");
const SDR = require("./features/sdr/model/sdrModel");
const Fans = require("./features/fan/model/fanModel");

const MONGO_URI = process.env.MONGO_URI;

const seedTeamData = [
  { name: "Seleção Amarela", imageUrl: "http://192.168.1.22:3000/public/camiseta_amarela.png" },
  { name: "Seleção Verde", imageUrl: "http://192.168.1.22:3000/public/camiseta_verde.png" },
  { name: "Seleção Azul", imageUrl: "http://192.168.1.22:3000/public/camiseta_azul.png" },
];
const seedVendorData = [
  {
    name: "Joice",
    job: "B2G Farmer",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/joice.png",
    videoGol: "http://192.168.1.22:3000/public/joice_gol.webm",
    videoGol: "http://192.168.1.22:3000/public/joice_escalacao.webm",
  },
  {
    name: "Karine",
    job: "B2B Farmer",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/karine.png",
    videoGol: "http://192.168.1.22:3000/public/karine_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/karine_escalacao.webm",
  },
  {
    name: "Renan",
    job: "B2B Farmer",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/renan.png",
    videoGol: "http://192.168.1.22:3000/public/renan_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/renan_escalacao.webm",
  },
  {
    name: "Giovana",
    job: "B2B Farmer",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/giovana_farmer.png",
    videoGol: "http://192.168.1.22:3000/public/giovana_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/giovana_escalacao.webm",
  },
  {
    name: "Nubia",
    job: "B2B Venda",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/nubia.png",
    videoGol: "http://192.168.1.22:3000/public/nubia_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/nubia_escalacao.webm",
  },
  {
    name: "Rayssa",
    job: "B2B Venda",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/rayssa.png",
    videoGol: "http://192.168.1.22:3000/public/rayssa_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/rayssa_escalacao.webm",
  },
  {
    name: "Danne",
    job: "B2B Farmer",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/danne.png",
    videoGol: "http://192.168.1.22:3000/public/danne_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/danne_escalacao.webm",
  },
  {
    name: "Nicolly",
    job: "B2B Farmer",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/nicolly.png",
    videoGol: "http://192.168.1.22:3000/public/nicolly_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/nicolly_escalacao.webm",
  },
  {
    name: "Samuel",
    job: "B2B Farmer",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/samuel.png",
    videoGol: "http://192.168.1.22:3000/public/samuel_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/samuel_escalacao.webm",
  },
  {
    name: "Maria",
    job: "B2B Farmer",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/maria.png",
    videoGol: "http://192.168.1.22:3000/public/maria_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/maria_escalacao.webm",
  },
  {
    name: "Brenda",
    job: "B2B Venda",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/brenda.png",
    videoGol: "http://192.168.1.22:3000/public/brenda_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/brenda_escalacao.webm",
  },
  {
    name: "Victoria",
    job: "B2B Venda",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/victoria.png",
    videoGol: "http://192.168.1.22:3000/public/victoria_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/victoria_escalacao.webm",
  },
  {
    name: "Heitor",
    job: "B2G Venda",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/heitor.png",
    videoUrl: "http://192.168.1.22:3000/public/heitor_escalacao.webm",
    videoGol: "http://192.168.1.22:3000/public/heitor_gol.webm",
  },
  {
    name: "Roberta",
    job: "B2B Farmer",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/roberta.png",
    videoGol: "http://192.168.1.22:3000/public/roberta_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/roberta_escalacao.webm",
  },
  {
    name: "Sabrina",
    job: "B2B Farmer",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/sabrina.png",
    videoGol: "http://192.168.1.22:3000/public/sabrina_gol.wemb",
    videoUrl: "http://192.168.1.22:3000/public/sabrina_escalacao.webm",
  },
  {
    name: "Marcelo",
    job: "B2B Farmer",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/marcelo.png",
    videoGol: "http://192.168.1.22:3000/public/marcelo_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/marcelo_escalacao.webm",
  },
  {
    name: "Wagner",
    job: "B2G Farmer",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/wagner.png",
    videoGol: "http://192.168.1.22:3000/public/wagner_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/wagner_escalacao.webm",
  },
  {
    name: "Rodolfo",
    job: "B2B Venda",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/rodolfo.png",
    videoGol: "http://192.168.1.22:3000/public/rodolfo_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/rodolfo_escalacao.webm",
  },
  {
    name: "Jullya",
    job: "B2B Venda",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/jullya.png",
    videoGol: "http://192.168.1.22:3000/public/jullya_gol.webm",
    videoUrl: "http://192.168.1.22:3000/public/jullya_escalacao.webm",
  },
  {
    name: "Jonathan",
    job: "B2G Venda",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/jonathan.png",
  },
];

const seedSdrData = [
  {
    name: "João Miguel",
    job: "Suporte",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/joao.png",
  },
  {
    name: "Gabriel",
    job: "CS",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/gabriel.png",
    videoUrl: "http://192.168.1.22:3000/public/gabriel_escalacao.webm",
  },
  { name: "Izabel", job: "SDR", teamName: "Seleção Verde", imageUrl: "http://192.168.1.22:3000/public/izabel.png" },
  {
    name: "Fernanda",
    job: "SDR",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/fernanda.png",
    videoUrl: "http://192.168.1.22:3000/public/fernanda_escalacao.webm",
  },
  {
    name: "Julia Barrau",
    job: "Suporte",
    teamName: "Seleção Verde",
    imageUrl: "http://192.168.1.22:3000/public/julia_suporte.png",
  },
  {
    name: "Caio",
    job: "CS",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/caio_cs.png",
    videoUrl: "http://192.168.1.22:3000/public/caio_cs_escalacao.webm",
  },
  {
    name: "Lucas Daniel",
    job: "SDR",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/lucas_daniel.png",
    videoUrl: "http://192.168.1.22:3000/public/lucas_escalacao.webm",
  },
  {
    name: "Matheus",
    job: "SDR",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/matheus.png",
    videoUrl: "http://192.168.1.22:3000/public/matheus_escalacao.webm",
  },
  {
    name: "Julia Tomaz",
    job: "Suporte",
    teamName: "Seleção Amarela",
    imageUrl: "http://192.168.1.22:3000/public/julia_t.png",
    videoUrl: "http://192.168.1.22:3000/public/julia_escalacao.webm",
  },
  {
    name: "Giovanni",
    job: "CS",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/giovanni.png",
    videoUrl: "http://192.168.1.22:3000/public/giovanni_escalacao.webm",
  },
  { name: "Vitoria", job: "SDR", teamName: "Seleção Azul", imageUrl: "http://192.168.1.22:3000/public/vitoria.png" },
  {
    name: "Gustavo",
    job: "SDR",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/gustavo.png",
    videoUrl: "http://192.168.1.22:3000/public/gustavo_escalacao.webm",
  },
  {
    name: "Leticia",
    job: "Suporte",
    teamName: "Seleção Azul",
    imageUrl: "http://192.168.1.22:3000/public/leticia.png",
    videoUrl: "http://192.168.1.22:3000/public/leticia_escalacao.webm",
  },
];

const seedFanData = [
  { name: "Leonardo", teamName: "Seleção Verde" },
  { name: "Bianca", teamName: "Seleção Verde" },
  { name: "Maju", teamName: "Seleção Verde" },
  { name: "Giovanna", teamName: "Seleção Verde" },
  { name: "Rafaela Fernandes", teamName: "Seleção Verde" },
  { name: "Giovanna", teamName: "Seleção Verde" },
  { name: "Nathaly", teamName: "Seleção Verde" },
  { name: "Rafaela Portela", teamName: "Seleção Verde" },
  { name: "Rodrigo", teamName: "Seleção Verde" },
  { name: "Nicole", teamName: "Seleção Verde" },
  { name: "Tamires", teamName: "Seleção Verde" },
  { name: "Matheus", teamName: "Seleção Amarela" },
  { name: "Allan", teamName: "Seleção Amarela" },
  { name: "Julia", teamName: "Seleção Amarela" },
  { name: "Caio", teamName: "Seleção Amarela" },
  { name: "Fernando", teamName: "Seleção Amarela" },
  { name: "Beatriz", teamName: "Seleção Amarela" },
  { name: "Phill", teamName: "Seleção Amarela" },
  { name: "Wesley", teamName: "Seleção Amarela" },
  { name: "Giovani", teamName: "Seleção Azul" },
  { name: "Luciana", teamName: "Seleção Azul" },
  { name: "Regiane", teamName: "Seleção Azul" },
  { name: "Renato", teamName: "Seleção Azul" },
  { name: "Claudio", teamName: "Seleção Azul" },
  { name: "Laryssa", teamName: "Seleção Azul" },
  { name: "Douglas", teamName: "Seleção Azul" },
  { name: "Diego", teamName: "Seleção Azul" },
  { name: "Marco Aurélio", teamName: "Seleção Azul" },
  { name: "Deyse", teamName: "Seleção Azul" },
];
async function createTeams(data) {
  try {
    await mongoose.connect(MONGO_URI);

    await Teams.deleteMany({});
    await Vendors.deleteMany({});
    await SDR.deleteMany({});
    await Fans.deleteMany({});

    console.log("Conexão criada e tabela do time, dos vendedores e sdr limpas com sucesso");

    const teams = await Teams.insertMany(data);
    for (const team of teams) {
      const filteredVendor = seedVendorData.filter((item) => item.teamName === team.name);
      const filteredSdr = seedSdrData.filter((item) => item.teamName === team.name);
      const filteredFan = seedFanData.filter((item) => item.teamName === team.name);
      await createVendorBase(team._id, filteredVendor);
      await createSdrBase(team._id, filteredSdr);
      await createFanBase(team._id, filteredFan);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  } finally {
    mongoose.connection.close();
    console.log("Conexão fechada.");
  }
}

async function createVendorBase(teamId, vendors) {
  const teamVendor = vendors.map((vendor) => ({
    name: vendor.name,
    job: vendor.job,
    teamId,
    imageUrl: vendor.imageUrl,
    videoUrl: vendor.videoUrl,
    videoGol: vendor.videoGol,
  }));
  await Vendors.insertMany(teamVendor);
}

async function createSdrBase(teamId, sdrs) {
  const teamSdr = sdrs.map((sdr) => ({
    name: sdr.name,
    job: sdr.job,
    teamId,
    imageUrl: sdr.imageUrl,
    videoUrl: sdr.videoUrl,
  }));
  await SDR.insertMany(teamSdr);
}

async function createFanBase(teamId, fans) {
  const groupFans = fans.map((fan) => ({ name: fan.name, teamId }));
  await Fans.insertMany(groupFans);
}

createTeams(seedTeamData);
