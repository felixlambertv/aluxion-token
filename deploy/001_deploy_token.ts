import { Aluxion__factory } from "./../typechain-types/factories/contracts/Token.sol/Aluxion__factory";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const contractName = "Aluxion";
  type TokenDeployArgs = Parameters<Aluxion__factory["deploy"]>;
  const { deployer } = await getNamedAccounts();
  const tokenContract = await deployments.getOrNull(contractName);

  if (!tokenContract) {
    const args: TokenDeployArgs = [deployer];

    await deployments.deploy(contractName, {
      contract: contractName,
      from: deployer,
      args: args,
      log: true,
    });
  }
};

func.tags = ["Token"];

export default func;
